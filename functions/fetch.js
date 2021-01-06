import fetch from 'node-fetch'
import dayjs from 'dayjs'

const fetchPage = async (date, retries = 0) => {
  try {
    const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=revisions&titles=Portal%3ACurrent%20events%2F${dayjs(date).format('YYYY MMMM D')}&formatversion=latest&rvprop=content&rvparse=1`
    const response = await fetch(url)
    const { query } = await response.json()
    const page = query?.pages?.[0]
    return page.missing
      ? null
      : page?.revisions?.[0]?.content
  } catch (err) {
    console.log(err)

    console.log('ERR.NAME === \'FETCHERROR\' && RETRIES < 3', err.name && retries < 3)
    if (err.name === 'FetchError' && retries < 3) {
      console.log('CONDITION PASSED')
      return await fetchPage(date, retries + 1)
    }
  }
}

exports.handler = async ({ httpMethod, queryStringParameters }) => {
  if (httpMethod !== 'GET') {
    // Only allow GET
    return {
      statusCode: 405,
      body: 'Method Not Allowed'
    }
  } else if (!queryStringParameters.date || !/^(19|20)\d\d-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/.test(queryStringParameters.date)) {
    // Check if there is a (correct) date parameter
    return {
      statusCode: 400,
      body: 'Bad Request'
    }
  }

  // Fetch the current events page from Wikipedia
  const content = await fetchPage(queryStringParameters.date)

  if (content) {
    return {
      statusCode: 200,
      body: content
    }
  }

  return {
    statusCode: 404,
    body: 'Not Found'
  }
}
