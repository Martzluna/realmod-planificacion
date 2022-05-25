
export const FileUp = async (file) => {
    const urlCloudinary = 'https://api.cloudinary.com/v1_1/dwbno71qd/upload'
    const formData = new FormData()

    formData.append('upload_preset', 'Realmod'); 
    formData.append('file', file); 

    const resp = await fetch(urlCloudinary, {
        method: 'POST',
        body: formData
    })
    const data = await resp.json()
    console.log(data)
    console.log(data.secure_url)
    return data.secure_url

}