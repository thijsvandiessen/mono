resource "vercel_project" "lundi-bleu" {
  name = "lundi-bleu"
}

resource "vercel_deployment" "lundi-bleu" {
  project_id = vercel_project.lundi-bleu.id
  ref        = var.TFC_CONFIGURATION_VERSION_GIT_COMMIT_SHA
  production = false
}

data "vercel_project_directory" "lundi-bleu" {
  path = "../apps/lundi-bleu"
}

