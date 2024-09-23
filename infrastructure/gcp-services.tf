# set up the services required

resource "google_project_service" "services" {
  for_each = toset([
    "iam",
    "cloudresourcemanager",
    "cloudbilling",
    "domains",
    "dns",
  ])
  project                    = google_project.main.project_id
  service                    = "${each.key}.googleapis.com"
  disable_dependent_services = true
}