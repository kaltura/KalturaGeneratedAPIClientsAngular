
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRemoteDropFolder, KalturaRemoteDropFolderArgs } from './KalturaRemoteDropFolder';

export interface KalturaSshDropFolderArgs  extends KalturaRemoteDropFolderArgs {
    host? : string;
	port? : number;
	username? : string;
	password? : string;
	privateKey? : string;
	publicKey? : string;
	passPhrase? : string;
}


export class KalturaSshDropFolder extends KalturaRemoteDropFolder {

    host : string;
	port : number;
	username : string;
	password : string;
	privateKey : string;
	publicKey : string;
	passPhrase : string;

    constructor(data? : KalturaSshDropFolderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSshDropFolder' },
				host : { type : 's' },
				port : { type : 'n' },
				username : { type : 's' },
				password : { type : 's' },
				privateKey : { type : 's' },
				publicKey : { type : 's' },
				passPhrase : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSshDropFolder',KalturaSshDropFolder);
