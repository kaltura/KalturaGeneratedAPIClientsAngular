
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDropFolderFile, KalturaDropFolderFileArgs } from './KalturaDropFolderFile';

export interface KalturaFeedDropFolderFileArgs  extends KalturaDropFolderFileArgs {
    hash? : string;
	feedXmlPath? : string;
}


export class KalturaFeedDropFolderFile extends KalturaDropFolderFile {

    hash : string;
	feedXmlPath : string;

    constructor(data? : KalturaFeedDropFolderFileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFeedDropFolderFile' },
				hash : { type : 's' },
				feedXmlPath : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFeedDropFolderFile'] = KalturaFeedDropFolderFile;