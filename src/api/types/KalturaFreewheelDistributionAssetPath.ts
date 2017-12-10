
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDistributionJobProviderData, KalturaDistributionJobProviderDataArgs } from './KalturaDistributionJobProviderData';

export interface KalturaFreewheelDistributionAssetPathArgs  extends KalturaDistributionJobProviderDataArgs {
    path? : string;
}


export class KalturaFreewheelDistributionAssetPath extends KalturaDistributionJobProviderData {

    path : string;

    constructor(data? : KalturaFreewheelDistributionAssetPathArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFreewheelDistributionAssetPath' },
				path : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFreewheelDistributionAssetPath',KalturaFreewheelDistributionAssetPath);
