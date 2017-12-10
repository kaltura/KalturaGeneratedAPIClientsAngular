
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaConvertCollectionFlavorDataArgs  extends KalturaObjectBaseArgs {
    flavorAssetId? : string;
	flavorParamsOutputId? : number;
	readyBehavior? : number;
	videoBitrate? : number;
	audioBitrate? : number;
	destFileSyncLocalPath? : string;
	destFileSyncRemoteUrl? : string;
}


export class KalturaConvertCollectionFlavorData extends KalturaObjectBase {

    flavorAssetId : string;
	flavorParamsOutputId : number;
	readyBehavior : number;
	videoBitrate : number;
	audioBitrate : number;
	destFileSyncLocalPath : string;
	destFileSyncRemoteUrl : string;

    constructor(data? : KalturaConvertCollectionFlavorDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaConvertCollectionFlavorData' },
				flavorAssetId : { type : 's' },
				flavorParamsOutputId : { type : 'n' },
				readyBehavior : { type : 'n' },
				videoBitrate : { type : 'n' },
				audioBitrate : { type : 'n' },
				destFileSyncLocalPath : { type : 's' },
				destFileSyncRemoteUrl : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaConvertCollectionFlavorData',KalturaConvertCollectionFlavorData);
