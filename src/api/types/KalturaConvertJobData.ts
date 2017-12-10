
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDestFileSyncDescriptor } from './KalturaDestFileSyncDescriptor';
import { KalturaConvartableJobData, KalturaConvartableJobDataArgs } from './KalturaConvartableJobData';

export interface KalturaConvertJobDataArgs  extends KalturaConvartableJobDataArgs {
    destFileSyncLocalPath? : string;
	destFileSyncRemoteUrl? : string;
	logFileSyncLocalPath? : string;
	logFileSyncRemoteUrl? : string;
	flavorAssetId? : string;
	remoteMediaId? : string;
	customData? : string;
	extraDestFileSyncs? : KalturaDestFileSyncDescriptor[];
	engineMessage? : string;
}


export class KalturaConvertJobData extends KalturaConvartableJobData {

    destFileSyncLocalPath : string;
	destFileSyncRemoteUrl : string;
	logFileSyncLocalPath : string;
	logFileSyncRemoteUrl : string;
	flavorAssetId : string;
	remoteMediaId : string;
	customData : string;
	extraDestFileSyncs : KalturaDestFileSyncDescriptor[];
	engineMessage : string;

    constructor(data? : KalturaConvertJobDataArgs)
    {
        super(data);
        if (typeof this.extraDestFileSyncs === 'undefined') this.extraDestFileSyncs = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaConvertJobData' },
				destFileSyncLocalPath : { type : 's' },
				destFileSyncRemoteUrl : { type : 's' },
				logFileSyncLocalPath : { type : 's' },
				logFileSyncRemoteUrl : { type : 's' },
				flavorAssetId : { type : 's' },
				remoteMediaId : { type : 's' },
				customData : { type : 's' },
				extraDestFileSyncs : { type : 'a', subTypeConstructor : KalturaDestFileSyncDescriptor, subType : 'KalturaDestFileSyncDescriptor' },
				engineMessage : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaConvertJobData',KalturaConvertJobData);
