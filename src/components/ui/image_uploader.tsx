import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Image } from "lucide-react" // Icon for image upload preview

const ImageUploader: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedImage(file)
      setPreviewUrl(URL.createObjectURL(file))
    }
  }

  const handleClearImage = () => {
    setSelectedImage(null)
    setPreviewUrl(null)
  }

  const handleSubmit = () => {
    if (!selectedImage) {
      alert("Please select an image first!")
      return
    }

    // Handle the file upload logic here (e.g., send it to an API)
    alert(`Image "${selectedImage.name}" uploaded successfully!`)
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <Card className="max-w-md w-full shadow-lg">
        <CardContent>
          <div className="text-center mb-4">
            <h2 className="text-xl font-semibold">Upload an Image</h2>
          </div>
          {previewUrl ? (
            <div className="mb-4">
              <img
                src={previewUrl}
                alt="Preview"
                className="w-full h-64 object-cover rounded-md"
              />
            </div>
          ) : (
            <div className="flex justify-center items-center mb-4 h-64 border border-dashed border-gray-300 rounded-md">
              <Image size={48} className="text-gray-400" />
            </div>
          )}
          <Input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            id="image-upload"
          />
          <label
            htmlFor="image-upload"
            className="block text-center text-sm font-medium text-blue-600 cursor-pointer hover:underline"
          >
            {selectedImage ? "Change Image" : "Choose an Image"}
          </label>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="secondary" onClick={handleClearImage}>
            Clear
          </Button>
          <Button onClick={handleSubmit} disabled={!selectedImage}>
            Upload
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default ImageUploader
