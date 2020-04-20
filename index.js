addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */


async function handleRequest(request) {
  let urls = await (await fetch('https://cfw-takehome.developers.workers.dev/api/variants')).json();

  //first variant
  const first = await fetch(urls.variants[0]).then(function(response) {
    return response.text();
  }).then(function(string) {
      return string;
  }).catch(function(err) {  
      console.log('Fetch Error', err);  
  });

  //second variant
  const second = await fetch(urls.variants[1]).then(function(response) {
    return response.text();
  }).then(function(string) {
    return string;
  }).catch(function(err) {  
    return 'Fetch Error', err;  
  });

  //picking one of them randomly
  let ran = Math.random() >= 0.5 ? first: second

  //displaying as html
  return new Response(ran, { headers: {'Content-type': 'text/html'}});
}
