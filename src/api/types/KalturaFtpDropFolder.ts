
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaRemoteDropFolder, KalturaRemoteDropFolderArgs } from './KalturaRemoteDropFolder';

export interface KalturaFtpDropFolderArgs  extends KalturaRemoteDropFolderArgs {
    host? : string;
	port? : number;
	username? : string;
	password? : string;
}


export class KalturaFtpDropFolder extends KalturaRemoteDropFolder {

    host : string;
	port : number;
	username : string;
	password : string;

    constructor(data? : KalturaFtpDropFolderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFtpDropFolder' },
				host : { type : 's' },
				port : { type : 'n' },
				username : { type : 's' },
				password : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFtpDropFolder',KalturaFtpDropFolder);
