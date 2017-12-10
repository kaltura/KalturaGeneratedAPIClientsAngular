
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaScheduleEventType } from './KalturaScheduleEventType';
import { KalturaDropFolderFileHandlerConfig, KalturaDropFolderFileHandlerConfigArgs } from './KalturaDropFolderFileHandlerConfig';

export interface KalturaDropFolderICalBulkUploadFileHandlerConfigArgs  extends KalturaDropFolderFileHandlerConfigArgs {
    eventsType? : KalturaScheduleEventType;
}


export class KalturaDropFolderICalBulkUploadFileHandlerConfig extends KalturaDropFolderFileHandlerConfig {

    eventsType : KalturaScheduleEventType;

    constructor(data? : KalturaDropFolderICalBulkUploadFileHandlerConfigArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDropFolderICalBulkUploadFileHandlerConfig' },
				eventsType : { type : 'en', subTypeConstructor : KalturaScheduleEventType, subType : 'KalturaScheduleEventType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDropFolderICalBulkUploadFileHandlerConfig',KalturaDropFolderICalBulkUploadFileHandlerConfig);
