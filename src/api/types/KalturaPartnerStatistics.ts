
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPartnerStatisticsArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaPartnerStatistics extends KalturaObjectBase {

    readonly packageBandwidthAndStorage : number;
	readonly hosting : number;
	readonly bandwidth : number;
	readonly usage : number;
	readonly usagePercent : number;
	readonly reachedLimitDate : number;

    constructor(data? : KalturaPartnerStatisticsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPartnerStatistics' },
				packageBandwidthAndStorage : { type : 'n', readOnly : true },
				hosting : { type : 'n', readOnly : true },
				bandwidth : { type : 'n', readOnly : true },
				usage : { type : 'n', readOnly : true },
				usagePercent : { type : 'n', readOnly : true },
				reachedLimitDate : { type : 'n', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPartnerStatistics',KalturaPartnerStatistics);
