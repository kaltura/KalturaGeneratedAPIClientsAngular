
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDropFolderContentProcessorJobData, KalturaDropFolderContentProcessorJobDataArgs } from './KalturaDropFolderContentProcessorJobData';

export interface KalturaWebexDropFolderContentProcessorJobDataArgs  extends KalturaDropFolderContentProcessorJobDataArgs {
    description? : string;
	webexHostId? : string;
}


export class KalturaWebexDropFolderContentProcessorJobData extends KalturaDropFolderContentProcessorJobData {

    description : string;
	webexHostId : string;

    constructor(data? : KalturaWebexDropFolderContentProcessorJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaWebexDropFolderContentProcessorJobData' },
				description : { type : 's' },
				webexHostId : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaWebexDropFolderContentProcessorJobData',KalturaWebexDropFolderContentProcessorJobData);
