resource "google_project_service" "iam" {
  project = var.google_project_id
  service = "iam.googleapis.com"

  disable_on_destroy = false
}

resource "google_project_service" "apikeys" {
  project = var.google_project_id
  service = "apikeys.googleapis.com"

  disable_on_destroy = false
}

resource "google_project_service" "maps_backend" {
  project = var.google_project_id
  service = "maps-backend.googleapis.com"

  disable_on_destroy = false
}

resource "google_apikeys_key" "maps" {
  name         = "maps-api-key"
  display_name = "google-maps-api-key"
  project      = var.google_project_id

  depends_on = [
    google_project_service.apikeys,
    google_project_service.maps_backend,
  ]

  restrictions {
    api_targets {
      service = "maps-backend.googleapis.com"
      methods = ["GET*"]
    }
    browser_key_restrictions {
      allowed_referrers = [
        "https://www.lundibleu.nl/",
      ]
    }
  }
}