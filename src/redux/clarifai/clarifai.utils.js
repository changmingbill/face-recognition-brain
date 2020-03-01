export const calculateFaceLocation = (data) => {
    // const pos = data.outputs[0].data.regions[0].region_info.bounding_box;
    const regions = data.outputs[0].data.regions;
    const posArr = regions.map(region=>{
      return region.region_info.bounding_box;
    })
    
    const inputImage = document.getElementById('inputImage');
    const width = Number(inputImage.width);
    const height = Number(inputImage.height);
    return posArr.map(pos=>calculateBox(pos, width, height));
  }

  const calculateBox = (pos, width, height) => {
    return  { 
      top_row : pos.top_row * height, 
      left_col : pos.left_col * width, 
      bottom_row : height - (pos.bottom_row * height),
      right_col : width - (pos.right_col * width)
    };
  }

  