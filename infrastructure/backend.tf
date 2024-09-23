terraform {
  backend "gcs" {
    bucket = "jake-tfstate-bucket"
    prefix = "project/website/state"
  }
}