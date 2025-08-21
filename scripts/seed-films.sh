#!/bin/bash

# initial films data

set -e

if [ -f .env ]; then
  export $(grep -v '^#' .env | xargs)
fi

echo "Firestore URL: $VITE_FIRESTORE_URL/films"

films="[
  {\"image\":\"/images/movies-series/alice-wonderland.png\",\"title\":\"Alice in Wonderland\",\"rating\":4,\"isNewEpisode\":true,\"isTop10\":true},
  {\"image\":\"/images/movies-series/all-of-us-are-dead.png\",\"title\":\"All of Us Are Dead\",\"rating\":3,\"isNewEpisode\":true,\"isTop10\":false},
  {\"image\":\"/images/movies-series/a-man-called-otto.png\",\"title\":\"A Man Called Otto\",\"rating\":5,\"isNewEpisode\":false,\"isTop10\":true},
  {\"image\":\"/images/movies-series/avatar.png\",\"title\":\"Avatar\",\"rating\":2,\"isNewEpisode\":false,\"isTop10\":false},
  {\"image\":\"/images/movies-series/batman.png\",\"title\":\"Batman\",\"rating\":4,\"isNewEpisode\":false,\"isTop10\":false},
  {\"image\":\"/images/movies-series/baymax.png\",\"title\":\"Baymax!\",\"rating\":3,\"isNewEpisode\":false,\"isTop10\":false},
  {\"image\":\"/images/movies-series/big-hero-6.png\",\"title\":\"Big Hero 6\",\"rating\":4,\"isNewEpisode\":true,\"isTop10\":true},
  {\"image\":\"/images/movies-series/black-adam.png\",\"title\":\"Black Adam\",\"rating\":2,\"isNewEpisode\":false,\"isTop10\":true},
  {\"image\":\"/images/movies-series/bluelock.png\",\"title\":\"Blue Lock\",\"rating\":5,\"isNewEpisode\":false,\"isTop10\":true},
  {\"image\":\"/images/movies-series/devil-all-the-time.png\",\"title\":\"The Devil All the Time\",\"rating\":3,\"isNewEpisode\":false,\"isTop10\":true},
  {\"image\":\"/images/movies-series/dilan.png\",\"title\":\"Dilan 1990\",\"rating\":4,\"isNewEpisode\":false,\"isTop10\":true},
  {\"image\":\"/images/movies-series/dr-strange.png\",\"title\":\"Doctor Strange\",\"rating\":2,\"isNewEpisode\":false,\"isTop10\":true},
  {\"image\":\"/images/movies-series/duty-after-schooll.png\",\"title\":\"Duty After School\",\"rating\":5,\"isNewEpisode\":false,\"isTop10\":true},
  {\"image\":\"/images/movies-series/dont-look-up.png\",\"title\":\"Don't Look Up\",\"rating\":3,\"isNewEpisode\":true,\"isTop10\":false},
  {\"image\":\"/images/movies-series/fast-x.png\",\"title\":\"Fast X\",\"rating\":3,\"isNewEpisode\":false,\"isTop10\":true},
  {\"image\":\"/images/movies-series/guardian-galaxy.png\",\"title\":\"Guardians of the Galaxy\",\"rating\":4,\"isNewEpisode\":true,\"isTop10\":true},
  {\"image\":\"/images/movies-series/happiness.png\",\"title\":\"Happiness\",\"rating\":5,\"isNewEpisode\":false,\"isTop10\":true},
  {\"image\":\"/images/movies-series/jurassic-world.png\",\"title\":\"Jurassic World\",\"rating\":3,\"isNewEpisode\":true,\"isTop10\":true},
  {\"image\":\"/images/movies-series/little-mermaid.png\",\"title\":\"The Little Mermaid\",\"rating\":4,\"isNewEpisode\":false,\"isTop10\":true},
  {\"image\":\"/images/movies-series/megan.png\",\"title\":\"M3GAN\",\"rating\":2,\"isNewEpisode\":true,\"isTop10\":true},
  {\"image\":\"/images/movies-series/missing.png\",\"title\":\"Missing\",\"rating\":5,\"isNewEpisode\":false,\"isTop10\":true},
  {\"image\":\"/images/movies-series/my-hero-academia.png\",\"title\":\"My Hero Academia\",\"rating\":4,\"isNewEpisode\":false,\"isTop10\":true},
  {\"image\":\"/images/movies-series/quantumania.png\",\"title\":\"Ant-Man and the Wasp: Quantumania\",\"rating\":3,\"isNewEpisode\":true,\"isTop10\":true},
  {\"image\":\"/images/movies-series/rio.png\",\"title\":\"Rio\",\"rating\":5,\"isNewEpisode\":true,\"isTop10\":false},
  {\"image\":\"/images/movies-series/shazam.png\",\"title\":\"Shazam!\",\"rating\":2,\"isNewEpisode\":true,\"isTop10\":false},
  {\"image\":\"/images/movies-series/sonic-2.png\",\"title\":\"Sonic the Hedgehog 2\",\"rating\":4,\"isNewEpisode\":true,\"isTop10\":false},
  {\"image\":\"/images/movies-series/spiderman.png\",\"title\":\"Spider-Man\",\"rating\":3,\"isNewEpisode\":true,\"isTop10\":false},
  {\"image\":\"/images/movies-series/stuart-little.png\",\"title\":\"Stuart Little\",\"rating\":5,\"isNewEpisode\":true,\"isTop10\":false},
  {\"image\":\"/images/movies-series/suzume.png\",\"title\":\"Suzume\",\"rating\":5,\"isNewEpisode\":true,\"isTop10\":false},
  {\"image\":\"/images/movies-series/ted-lasso.png\",\"title\":\"Ted Lasso\",\"rating\":2,\"isNewEpisode\":true,\"isTop10\":false},
  {\"image\":\"/images/movies-series/the-tomorrow-war.png\",\"title\":\"The Tomorrow War\",\"rating\":4,\"isNewEpisode\":true,\"isTop10\":false},
  {\"image\":\"/images/movies-series/drakor.png\",\"title\":\"Drakor\",\"rating\":1,\"isNewEpisode\":false,\"isTop10\":false}
]"

echo "$films" | jq -c '.[]' | while read film; do
  curl -X POST "$VITE_FIRESTORE_URL/films" \
    -H "Content-Type: application/json" \
    -d "$(echo "$film" | jq '{fields: {
      title: {stringValue: .title},
      image: {stringValue: .image},
      rating: {integerValue: .rating},
      isNewEpisode: {booleanValue: .isNewEpisode},
      isTop10: {booleanValue: .isTop10}
    }}')"
done

echo "All films inserted!"