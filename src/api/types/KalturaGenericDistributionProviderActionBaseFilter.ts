
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDistributionAction } from './KalturaDistributionAction';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaGenericDistributionProviderActionBaseFilterArgs  extends KalturaFilterArgs {
    idEqual? : number;
	idIn? : string;
	createdAtGreaterThanOrEqual? : Date;
	createdAtLessThanOrEqual? : Date;
	updatedAtGreaterThanOrEqual? : Date;
	updatedAtLessThanOrEqual? : Date;
	genericDistributionProviderIdEqual? : number;
	genericDistributionProviderIdIn? : string;
	actionEqual? : KalturaDistributionAction;
	actionIn? : string;
}


export class KalturaGenericDistributionProviderActionBaseFilter extends KalturaFilter {

    idEqual : number;
	idIn : string;
	createdAtGreaterThanOrEqual : Date;
	createdAtLessThanOrEqual : Date;
	updatedAtGreaterThanOrEqual : Date;
	updatedAtLessThanOrEqual : Date;
	genericDistributionProviderIdEqual : number;
	genericDistributionProviderIdIn : string;
	actionEqual : KalturaDistributionAction;
	actionIn : string;

    constructor(data? : KalturaGenericDistributionProviderActionBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaGenericDistributionProviderActionBaseFilter' },
				idEqual : { type : 'n' },
				idIn : { type : 's' },
				createdAtGreaterThanOrEqual : { type : 'd' },
				createdAtLessThanOrEqual : { type : 'd' },
				updatedAtGreaterThanOrEqual : { type : 'd' },
				updatedAtLessThanOrEqual : { type : 'd' },
				genericDistributionProviderIdEqual : { type : 'n' },
				genericDistributionProviderIdIn : { type : 's' },
				actionEqual : { type : 'en', subTypeConstructor : KalturaDistributionAction, subType : 'KalturaDistributionAction' },
				actionIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaGenericDistributionProviderActionBaseFilter',KalturaGenericDistributionProviderActionBaseFilter);
