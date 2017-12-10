
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaWidevineRepositorySyncMode } from './KalturaWidevineRepositorySyncMode';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';

export interface KalturaWidevineRepositorySyncJobDataArgs  extends KalturaJobDataArgs {
    syncMode? : KalturaWidevineRepositorySyncMode;
	wvAssetIds? : string;
	modifiedAttributes? : string;
	monitorSyncCompletion? : number;
}


export class KalturaWidevineRepositorySyncJobData extends KalturaJobData {

    syncMode : KalturaWidevineRepositorySyncMode;
	wvAssetIds : string;
	modifiedAttributes : string;
	monitorSyncCompletion : number;

    constructor(data? : KalturaWidevineRepositorySyncJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaWidevineRepositorySyncJobData' },
				syncMode : { type : 'en', subTypeConstructor : KalturaWidevineRepositorySyncMode, subType : 'KalturaWidevineRepositorySyncMode' },
				wvAssetIds : { type : 's' },
				modifiedAttributes : { type : 's' },
				monitorSyncCompletion : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaWidevineRepositorySyncJobData',KalturaWidevineRepositorySyncJobData);
