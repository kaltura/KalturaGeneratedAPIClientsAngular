
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDropFolderFile, KalturaDropFolderFileArgs } from './KalturaDropFolderFile';

export interface KalturaWebexDropFolderFileArgs  extends KalturaDropFolderFileArgs {
    recordingId? : number;
	webexHostId? : string;
	description? : string;
	confId? : string;
	contentUrl? : string;
}


export class KalturaWebexDropFolderFile extends KalturaDropFolderFile {

    recordingId : number;
	webexHostId : string;
	description : string;
	confId : string;
	contentUrl : string;

    constructor(data? : KalturaWebexDropFolderFileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaWebexDropFolderFile' },
				recordingId : { type : 'n' },
				webexHostId : { type : 's' },
				description : { type : 's' },
				confId : { type : 's' },
				contentUrl : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaWebexDropFolderFile',KalturaWebexDropFolderFile);
