
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDropFolderFileHandlerConfig, KalturaDropFolderFileHandlerConfigArgs } from './KalturaDropFolderFileHandlerConfig';

export interface KalturaDropFolderTrRdsFileHandlerConfigArgs  extends KalturaDropFolderFileHandlerConfigArgs {
    leadPattern? : string;
	additionalPatterns? : string;
}


export class KalturaDropFolderTrRdsFileHandlerConfig extends KalturaDropFolderFileHandlerConfig {

    leadPattern : string;
	additionalPatterns : string;

    constructor(data? : KalturaDropFolderTrRdsFileHandlerConfigArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDropFolderTrRdsFileHandlerConfig' },
				leadPattern : { type : 's' },
				additionalPatterns : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDropFolderTrRdsFileHandlerConfig',KalturaDropFolderTrRdsFileHandlerConfig);
