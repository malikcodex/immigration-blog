export async function makeRequest(uri, data) {
    let result = await fetch(uri , {
        method: 'POST',
        body: data,
        headers: {
            "Content-type" : "application/json"
        }
    })

    let res = await result.json();
    return res;
}

export function getPagination(data, page = 1) {
    let start = 0;
    let limit = 8;
    if(!data.notFound) {
        if(page > 1) {
            start = ((page - 1) * limit)
            page = page;
        } else {
            start = 0;
        }
    
        let count = data.length;
        let per_page = Math.floor(count / limit);
        let next_page = page + 1;
        let prev_page = page - 1;
        let prev_disable = page <= 1 ? "disable" : "";
        let next_disable = page <= per_page ? "disable" : "";
        let splice = data.slice(start, limit);
        return {
            "data": splice,
            "page": page,
            "per_page": per_page,
            "next_page": next_page,
            "prev_page": prev_page,
            "next_disable": next_disable,
            "prev_disable": prev_disable,
            "total": per_page,
            "count": count
        }
    } else {
        return {
            "data": "",
            "page": 1,
            "per_page": "",
            "next_page": "",
            "prev_page": "",
            "next_disable": "disable",
            "prev_disable": "disable",
            "total": 1,
            "count": 1
        }
    }
}

export function change_str_to_slug(str) {
    if(str) {
        return str.replaceAll(/[^A-Za-z0-9:.@\?\'\"\!\,\*]/ig, ' ').replaceAll(/\s+/ig, '-').toLowerCase();
    }

    return null;
}

export async function optimizeImage(files, type='simple') {
    return new Promise((resolve, reject) => {
        let canvas = document.createElement("canvas");
        let ctx = canvas.getContext("2d");
        let image = new Image();
        image.src = type == "url" ? files : URL.createObjectURL(files);
        image.crossOrigin = true;

        if(type != 'url') {
             let imgExt = [".jpg",".png",".jpeg"];
             let imgName = files.name;
             let index = imgName.substr(imgName.lastIndexOf(".")).toLowerCase();
             if(!imgExt.includes(index)) {
                 make_msg("Note", "Upload Images With Valid Extensions (.jpg, .png, .jpeg)","error");
                 files.value = "";
                 return false;
             }
        }

        console.log("Image Starting For Optimization");

        image.onload = async() => {
            let aspectRatio = image.width / image.height;
            let newWidth = 1200;
            let newHeight = Math.floor(1200 / aspectRatio);
            canvas.width = newWidth;
            canvas.height = newHeight;
            ctx.filter = 'contrast(1) brightness(1)';
            ctx.imageSmoothingQuality = 'high';
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
            // Additional sharpening using convolution matrix
            const sharpenMatrix = [
                0, -1, 0,
                -1, 7, -1,
                0, -1, 0
            ];
            ctx.filter = `convolve(matrix(${sharpenMatrix.join(',')}), kernelSize 3, 3)`;
            ctx.drawImage(canvas, 0, 0);
            try {
                resolve(canvas.toDataURL("image/webp", 0.9));
            } catch(error) {
                reject("Image not optimized");
            }
        }
    })
}

export function make_msg(action , msg , status) {
    swal(action , msg , status);
}

export function change_str_to_title(str) {
    if(str) {
        return str.replaceAll(/[^A-Za-z0-9:.@\?\'\"\!\,\*]/ig, ' ').replaceAll(/\s+/ig, ' ').toLowerCase();
    }

    return null;
}

export function str_to_heading(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}