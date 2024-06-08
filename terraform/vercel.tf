resource "vercel_project" "lundi-bleu" {
  name = "lundi-bleu"
}

resource "vercel_deployment" "lundi-bleu" {
  project_id = vercel_project.lundi-bleu.id
}

data "vercel_project_directory" "lundi-bleu" {
  path = "../apps/lundi-bleu"
}

