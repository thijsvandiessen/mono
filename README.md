# crea-public

The CREA Orkest front end.

# Graphql

The graphql endpoint(s) that we use are proxied by Apollo Studio so that we have
one endpoint and the possebility to add multiple sub graphs.

## getting the newest schema

Every pull request the dato cms schema is checked and published. Make sure when you fetch locally the newest schema it is deployed to Apollo first.

To fetch the newest schema file locally you have to authenticate with Apollo Studio,
this can be done with the Rover CLI. Run `rover config auth`, or set an
`$APOLLO_KEY` env variable to a valid Apollo Studio API key.

Apollo admin rights can be acquired through Thijs van Diessen.
