import axios from "axios";


// to access youtube videos first we have to go "console.developers.google.com"
// then click on create project, and give some name to that project
// after creating your project click on "yourProjectName"
// there is option on top something like "+ENABLE APIS AND SERVICES"
// then select which API you want, here we want "youtube Data api v3" something like that
// so select that api and enable it
// on your profile you see "credentials" click on "+Credentials" on top or right hand side
// then you can generate "Access key"

const KEY = 'AIzaSyDvudEw1UQVTWWl1DcBFRnciZ6PJcDhAg4'

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
      part: "snippet",
      maxResults: 10,
      key: KEY
    }
  });

// we need this baseURL provided by google documentation
// description

//   Key: KEY

// API key 1: AIzaSyDvudEw1UQVTWWl1DcBFRnciZ6PJcDhAg4
// API key 2: AIzaSyAjdyvYF8Cc-HeBpNQqG7oH1E50d7BOvck