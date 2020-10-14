const apiKey = '019702f1d4d01c6b2c7e1c6e8627f9a2';
const imagesPerPage = 10; // máximo 500

function req(url) {
  return new Promise((resolve, reject) => {
    let req = new XMLHttpRequest();

    req.overrideMimeType('application/json');
    req.open('GET', url, true);

    req.onload = () => {
      if (req.status === 200) {
        resolve(JSON.parse(req.response));
      } else {
        reject(req.statusText);
      }
    };

    req.send();
  });
}

export async function searchTag(terms) {
  console.log('tick');
  if (!terms) {
    return;
  }
  terms = terms.replace(/\s/g, '');

  const url =
    'https://api.flickr.com/services/rest/?method=flickr.photos.search' +
    '&api_key=' +
    apiKey +
    '&tags=' +
    terms +
    '&per_page=' +
    imagesPerPage +
    '&page=' +
    1 +
    '&format=json' +
    '&nojsoncallback=?';

  const obj = await req(url);
  const item = obj.photos.photo[5];
  return `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_q.jpg`;
}
