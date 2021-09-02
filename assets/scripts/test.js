const Mysc = {
    "type": {
      "key": "/type/work"
    },
    "title": "Blackbirds",
    "authors": [
      {
        "type": {
          "key": "/type/author_role"
        },
        "author": {
          "key": "/authors/OL9115801A"
        }
      }
    ],
    "covers": [
      10688572
    ],
    "key": "/works/OL24225670W",
    "latest_revision": 1,
    "revision": 1,
    "created": {
      "type": "/type/datetime",
      "value": "2021-03-08T17:41:02.945937"
    },
    "last_modified": {
      "type": "/type/datetime",
      "value": "2021-03-08T17:41:02.945937"
    }
  };
  const x = JSON.stringify(Mysc);
  
  console.log(x[1]);
  