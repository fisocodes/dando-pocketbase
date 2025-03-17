/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // update collection data
  unmarshal({
    "authAlert": {
      "enabled": false
    },
    "createRule": null,
    "deleteRule": null
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // update collection data
  unmarshal({
    "authAlert": {
      "enabled": true
    },
    "createRule": "",
    "deleteRule": "id = @request.auth.id"
  }, collection)

  return app.save(collection)
})
