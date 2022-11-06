# Welcome to CryptoStudio!

Crypto Studio is a Dynamic ERC721 Collection builded for digital artists. Under the hood we are utializing tableland a new narative that brings SQL into smart contracts and also IPFS for storing (images - html - mp3) files for our NFTs into the network through NFT.STORAGE. 

Our platform is open to everyone. For now we are providing some precoded visualizers for newcomers to come and mint them with their prefered sound track. But we have plans to create a playground for anyone to come and create their scripts with 0 coding just from our UI! But also we cant wait digital artists to join us and build cool things!

Our NFTs are based on HTML files and a p5.js script for playing the visualizer and the sound. 

The HTML file is getting uploaded on IPFS and that derives the animation_url that is part of the NFT metadata.

The dynamic features for channging the audio track of an NFT comes into place by using the changeNFTaudio function that is located inside our contract. This function can be called only by the Owner of an NFT that wants to change the sound track of his NFT. The contract interacts with tableland to update the audio column of that NFT with the new audio CID! 




This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
