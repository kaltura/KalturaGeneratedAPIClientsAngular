
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDropFolderContentFileHandlerMatchPolicy } from './KalturaDropFolderContentFileHandlerMatchPolicy';
import { KalturaDropFolderFileHandlerConfig, KalturaDropFolderFileHandlerConfigArgs } from './KalturaDropFolderFileHandlerConfig';

export interface KalturaDropFolderContentFileHandlerConfigArgs  extends KalturaDropFolderFileHandlerConfigArgs {
    contentMatchPolicy? : KalturaDropFolderContentFileHandlerMatchPolicy;
	slugRegex? : string;
}


export class KalturaDropFolderContentFileHandlerConfig extends KalturaDropFolderFileHandlerConfig {

    contentMatchPolicy : KalturaDropFolderContentFileHandlerMatchPolicy;
	slugRegex : string;

    constructor(data? : KalturaDropFolderContentFileHandlerConfigArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDropFolderContentFileHandlerConfig' },
				contentMatchPolicy : { type : 'en', subTypeConstructor : KalturaDropFolderContentFileHandlerMatchPolicy, subType : 'KalturaDropFolderContentFileHandlerMatchPolicy' },
				slugRegex : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDropFolderContentFileHandlerConfig',KalturaDropFolderContentFileHandlerConfig);
