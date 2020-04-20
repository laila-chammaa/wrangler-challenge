addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  return new Response(
    fetch('https://cfw-takehome.developers.workers.dev/api/variants')
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    console.log(data);
  }), {
    headers: { 'content-type': 'text/plain' },
  })
}
