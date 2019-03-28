// var dotenv = require('dotenv');
// dotenv.load();

var cloudinary = require("cloudinary").v2;

var uploads = {};
var url;
// set your env variable CLOUDINARY_URL or set the following configuration
cloudinary.config({
  cloud_name: "dw9gpd3m1",
  api_key: "326483496681817",
  api_secret: "nHFpIeWr1Dz5UbRXttzfcJmazFQ"
});

// cloudinary.uploader.upload("lake.jpg", function(error, result) {
//   console.log(result, error);
// });

cloudinary.uploader.upload(
  "videoplayback.mp4",
  {
    resource_type: "video",
    public_id: "my_folder/my_sub_folder/dog_closeup",
    chunk_size: 6000000
  },
  function(error, result) {
    //console.log(result)
    url = result.url;
    console.log(url);
  }
);

function waitForAllUploads(id, err, image) {
  uploads[id] = image;
  var ids = Object.keys(uploads);
  if (ids.length == 6) {
    // console.log();
    //console.log('**  uploaded all files (' + ids.join(',') + ') to cloudinary');
    performTransformations();
  }
}

console.log(uploads);
// var proc = new ffmpeg('/path/to/your_movie.avi')
//   .takeScreenshots({
//       count: 1,
//       timemarks: [ '600' ] // number of seconds
//     }, '/path/to/thumbnail/folder', function(err) {
//     console.log('screenshots were saved')
//   });
