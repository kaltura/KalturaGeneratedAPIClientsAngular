
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPartnerUsageArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaPartnerUsage extends KalturaObjectBase {

    readonly hostingGB : number;
	readonly Percent : number;
	readonly packageBW : number;
	readonly usageGB : number;
	readonly reachedLimitDate : number;
	readonly usageGraph : string;

    constructor(data? : KalturaPartnerUsageArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPartnerUsage' },
				hostingGB : { type : 'n', readOnly : true },
				Percent : { type : 'n', readOnly : true },
				packageBW : { type : 'n', readOnly : true },
				usageGB : { type : 'n', readOnly : true },
				reachedLimitDate : { type : 'n', readOnly : true },
				usageGraph : { type : 's', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPartnerUsage',KalturaPartnerUsage);
