resource "google_project_service" "project" {
  project = var.google_project_id
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
  project      = var.google_project_id

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

