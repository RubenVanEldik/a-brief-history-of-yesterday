import fetch from 'node-fetch'
import dayjs from 'dayjs'

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
  try {
    const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=revisions&titles=Portal%3ACurrent%20events%2F${dayjs(queryStringParameters.date).format('YYYY MMMM D')}&formatversion=latest&rvprop=content&rvparse=1`
    const response = await fetch(url)
    const { query } = await response.json()
    const page = query?.pages?.[0]
    const content = page?.revisions?.[0]?.content

    return {
      statusCode: 200,
      body: content
    }
  } catch (err) {
    console.log(err)
  }

  return {
    statusCode: 404,
    body: 'Not Found'
  }
}
