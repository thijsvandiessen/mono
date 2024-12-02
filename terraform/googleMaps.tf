resource "google_project_service" "project" {
  project = "vandiessen"
  service = "iam.googleapis.com"

  timeouts {
    create = "30m"
    update = "40m"
  }

  disable_on_destroy = false
}

resource "google_apikeys_key" "maps" {
  name         = "maps-api-key"
  display_name = "google-maps-api-key"
  project      = "vandiessen"

  restrictions {
    api_targets {
      service = "maps-backend.googleapis.com"
      methods = ["GET*"]
    }
  }
}

