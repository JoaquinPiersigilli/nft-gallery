# NFT Gallery Coding Challenge

# What design/implementation decisions did I make and why? 

  Since I had little time to implement this, I first went fast to have something working, kind of an MVP.
  After that was ready, since I figured I was going to be able to use Redux, I changed the structure of the project to a feature oriented one, where each 
  feature will have its own folder and then that will also have components, handlers and handlers folder, with some root files also.
  An implementation decision I made was to separate the state into 2 reducers, one for the nfts which makes use of the OpenSea API and another one for the 
  ETH Balance which make use of the Infura web3 provider, so in the future if we want to retrieve more information from this providers, we would have them   separated. 
  
# What would you have done if you had more time? 

With more time I'd have:
  * Added some tests
  * Added error handling and retry logic.
  * Added react-router to make this an SPA with the header static and the main content depending on the url.
  * Added lazy-loading
  * Taken more time to get the styling right, probably would have try to use Tailwind. I noticed Mantine library was installed but never used it before so I didn't try. I looked up for it though and it seems so powerful, gonna use it for a personal project.
  * Leverage RTK to use RTK Query and have some cache over the images (right now every time we have 1 http request for each image url)
  * I will go over the project and try to improve it. For sure there are a lot of things to code in a better way.


# What would you need to do to make this project production ready? 

  To be production ready first of all we need a lot of infrastructure. We would have to set up at least a Staging environment and have some CI/CD Pipelines ready so they can execute the test suite and perform all the checks in "main" branch before pushing it to staging and then production.
  We would need monitoring tools such as New Relic, Grafana, Kibana or something similar.
  We would also need an OpenSea api key (at first I thought I needed it)
