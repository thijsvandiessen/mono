resource "google_project_service" "project" {
  project = google_project.mono.id
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
  project      = google_project.mono.name

  restrictions {
    api_targets {
      service = "maps-backend.googleapis.com"
      methods = ["GET*"]
    }
  }
}

