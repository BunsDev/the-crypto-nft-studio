import {Election, EnvironmentInitialitzationOptions, PlainCensus, VocdoniSDKClient, Vote} from '@vocdoni/sdk';

export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export default function useVocdoni() {
    const initClient = async (signer: any) => {
        if(!signer) return
        const client = new VocdoniSDKClient({
            env: EnvironmentInitialitzationOptions.DEV,
            wallet: signer,
        });

        console.log('Creating account...');
        const info = await client.createAccount()
        if (info.balance === 0) {
            console.log('Funding account...');
            await client.collectFaucetTokens()
        }
        console.log('Account created:', info);
        return client;
    }

    const createElection = (census: any, title: string, desc: string, endDate: Date, imageUri: string) => {

        const election = new Election({
            title: title,
            description: desc,
            header: imageUri,
            streamUri: imageUri,
            endDate: endDate.getTime(),
            census,
        });
        return election;
    }

    const addQuestion = (election: any, title: string, description: string, options: any[]) => {
        election.addQuestion(title, description, options);
    }

    const initElection = async (signer: any, voters: string[], title: string, desc: string, endDate: Date, imageUri: string, questions: any[]) => {
        const client = await initClient(signer)
        const census = new PlainCensus()
        voters.map((voter) => census.add(voter))
        const election = createElection(census, title, desc, endDate, imageUri)
        console.log('Adding questions...');
        questions.map((question) => addQuestion(election, question.title, question.description, question.options))
        console.log('Questions added');

        const electionId = await client!.createElection(election)
        console.log('Election created:', electionId);
        client!.setElectionId(electionId)
        await delay(14000)
        return electionId;
    }

    return {
        initClient,
        initElection,
        // vote
    }
}