
// Gallery categories configuration
export const GALLERY_CATEGORIES = {
  reviews: {
    title: 'Reviews',
    description: 'Student and parent testimonials',
    folder: 'reviews'
  },
  results: {
    title: 'Results', 
    description: 'Academic achievements and mark sheets',
    folder: 'results'
  },
  rankers: {
    title: 'Rankers',
    description: 'Top performing students',
    folder: 'rankers'
  },
  celebrations: {
    title: 'Celebrations',
    description: 'Events, festivals & classroom moments', 
    folder: 'celebrations'
  }
};

// Function to dynamically import images from a folder
export const getImagesFromFolder = async (folderName: string) => {
  try {
    // This will attempt to load images from public/gallery/{folderName}/
    const imageModules = import.meta.glob('/public/gallery/*/*.{png,jpg,jpeg,gif,webp}', { 
      eager: true,
      as: 'url'
    });
    
    const folderImages: Array<{src: string, title: string, description: string}> = [];
    
    Object.entries(imageModules).forEach(([path, url]) => {
      if (path.includes(`/gallery/${folderName}/`)) {
        const fileName = path.split('/').pop()?.split('.')[0] || '';
        folderImages.push({
          src: url as string,
          title: `${GALLERY_CATEGORIES[folderName as keyof typeof GALLERY_CATEGORIES]?.title} - ${fileName}`,
          description: `Image from ${GALLERY_CATEGORIES[folderName as keyof typeof GALLERY_CATEGORIES]?.description}`
        });
      }
    });
    
    return folderImages;
  } catch (error) {
    console.log(`No images found for ${folderName} folder`);
    return [];
  }
};

// Fallback images for each category (using existing uploads)
export const getFallbackImages = (category: string) => {
  const fallbackImages = {
    reviews: [
      {
        src: "/lovable-uploads/be2ea5d8-55a5-4008-a0de-899ce4a93891.png",
        title: "Student Review 1",
        description: "Positive feedback from our students"
      }
    ],
    results: [
      {
        src: "/lovable-uploads/4918c16d-437b-48cb-b248-5eb71b4c1028.png", 
        title: "Academic Result 1",
        description: "Outstanding academic performance"
      },
      {
        src: "/lovable-uploads/7d3108d6-20bc-41e4-a2bd-dc12ee814e7b.png",
        title: "Academic Result 2", 
        description: "Excellence in computer examinations"
      }
    ],
    rankers: [
      {
        src: "/lovable-uploads/0a1febda-9ffe-4cd1-a32f-943c9f081e1b.png",
        title: "Top Ranker 1",
        description: "State level achiever"
      },
      {
        src: "/lovable-uploads/199b222b-a06e-469d-8c5b-e67aee05ee31.png",
        title: "Top Ranker 2",
        description: "District level achiever"
      }
    ],
    celebrations: [
      {
        src: "/lovable-uploads/c28807ee-879b-4269-b44a-81473193e53e.png",
        title: "Celebration Event 1", 
        description: "Festival celebration at ECWDS"
      },
      {
        src: "/lovable-uploads/2b8c3839-0071-4e7a-9edd-8a731b4b71e0.png",
        title: "Celebration Event 2",
        description: "Classroom celebration moment"
      }
    ]
  };
  
  return fallbackImages[category as keyof typeof fallbackImages] || [];
};
