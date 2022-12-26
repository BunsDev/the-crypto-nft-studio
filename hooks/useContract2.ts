import {BigNumber, ethers} from "ethers";
import {tcsAbi,tcsContractAddress} from "../constants"
import {useAccount, useSigner} from "wagmi";
import { UpdateAttribute } from './../components/UpdateAttribute';

interface DeclareProps {
    name: String
    image: String
    audioCID: String
    animation: String
    description: String
    spaceName: String
    mintPrice: BigNumber
    maxSupply: number
    currentToken: number
}

interface AttributeProps {
    tokenId: number
    traitType: string
    value: string
}

export const useContract2 = () => {
    const {data: signer, isError, isLoading} = useSigner()
    const {address} = useAccount()

    const contract = new ethers.Contract(tcsContractAddress["the-crypto-studio"], tcsAbi, signer!)

    const getCurrentTokenId = async () => {
        return await contract.totalSupply()
    }


    const setTokenMintPrice = async (tokenId:number , mintPrice:BigNumber) => {
        const tx = await contract.setTokenMintPrice(tokenId, mintPrice)
        return await tx.wait()
    }

    const declareVisualizer = async ({name, image, audioCID, animation, description, spaceName, mintPrice, maxSupply,currentToken}: DeclareProps) => {
        const tx = await contract.declareNFT(name, image,audioCID, animation, description, spaceName, mintPrice, maxSupply,currentToken)
        return await tx.wait()
    }
    const declarePFP = async (name: String,image: String,description: String,spaceName: String,mintPrice: BigNumber,maxSupply: number,currentToken: number) =>{
        const tx = await contract.declareNFT(name, image,"", "", description, spaceName, mintPrice, maxSupply,currentToken)
        return await tx.wait()
    }
    const declareAudio = async (name: String,image: String,animation:string ,description: String,spaceName: String,mintPrice: BigNumber,maxSupply: number,currentToken: number) => {
        const tx = await contract.declareNFT(name, image,"", animation, description, spaceName, mintPrice, maxSupply,currentToken)
        return await tx.wait()
    }

    const declareTicket = async (name: String,image: String,description: String,spaceName: String,mintPrice: BigNumber,maxSupply: number,currentToken: number) =>{
        const tx = await contract.declareNFT(name, image,"TICKET", "TICKET", description, spaceName, mintPrice, maxSupply,currentToken)
        return await tx.wait()
    }



    const mint = async (tokenid:number, mintPrice:string) => {
        const tx = await contract.mint(tokenid, {value: ethers.utils.parseEther(mintPrice)})
        return await tx.wait()
    }


    const updateAttribute = async ({tokenId , traitType, value}: AttributeProps) => {
        const tx = await contract.updateAttribute(tokenId, traitType, value)
        return await tx.wait()
    }

    const addAttribute = async({tokenId, traitType, value}: AttributeProps) => {
        console.log("addAttribute", tokenId, traitType, value)
        const tx = await contract.addAttribute(tokenId, traitType, value)
        return await tx.wait()
    }

    const updateAudio = async(tokenId:number, audioCID:string) => {
        const tx = await contract.updateAudio(tokenId, audioCID)
        return await tx.wait()
    }


    const spaceExists = async (spaceName: string) => {
        return await contract.spaceExists(spaceName)
    }

    const mintSpace = async (spaceName: string, groupId: string, imageCid: string) => {
        const tx = await contract.socialSpaceCreation(spaceName, groupId, imageCid,{value: ethers.utils.parseEther("0.01")})
        return await tx.wait()
    }

    // how to add an address
    const addSpaceArtist = async(spaceName:string, address:any) => {
        const tx = await contract.addSpaceArtist(spaceName, address)
        return await tx.wait()
    }

        // how to add an address
    const deleteSpaceArtist = async(spaceName:string, address:any) => {
        const tx = await contract.deleteSpaceArtist(spaceName, address)
        return await tx.wait()
    }

    const isSpaceMember = async (spaceName: string, address:any) => {
        return await contract.isSpaceMember(spaceName, address)
    }

    const isSpaceArtist = async (spaceName: string, address:any) => {
        return await contract.isSpaceArtist(spaceName, address)
    }


    return {
        getCurrentTokenId,
        setTokenMintPrice,
        spaceExists,
        mintSpace,
        mint,
        isSpaceArtist,
        isSpaceMember,
        deleteSpaceArtist,
        addSpaceArtist,
        updateAudio,
        declareAudio,
        declarePFP,
        declareVisualizer,
        declareTicket,
        updateAttribute,
        addAttribute
    }
}