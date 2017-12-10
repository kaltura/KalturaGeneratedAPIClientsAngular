
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaGenericDistributionProviderStatus } from './KalturaGenericDistributionProviderStatus';
import { KalturaDistributionThumbDimensions } from './KalturaDistributionThumbDimensions';
import { KalturaDistributionProvider, KalturaDistributionProviderArgs } from './KalturaDistributionProvider';

export interface KalturaGenericDistributionProviderArgs  extends KalturaDistributionProviderArgs {
    isDefault? : boolean;
	optionalFlavorParamsIds? : string;
	requiredFlavorParamsIds? : string;
	optionalThumbDimensions? : KalturaDistributionThumbDimensions[];
	requiredThumbDimensions? : KalturaDistributionThumbDimensions[];
	editableFields? : string;
	mandatoryFields? : string;
}


export class KalturaGenericDistributionProvider extends KalturaDistributionProvider {

    readonly id : number;
	readonly createdAt : Date;
	readonly updatedAt : Date;
	readonly partnerId : number;
	isDefault : boolean;
	readonly status : KalturaGenericDistributionProviderStatus;
	optionalFlavorParamsIds : string;
	requiredFlavorParamsIds : string;
	optionalThumbDimensions : KalturaDistributionThumbDimensions[];
	requiredThumbDimensions : KalturaDistributionThumbDimensions[];
	editableFields : string;
	mandatoryFields : string;

    constructor(data? : KalturaGenericDistributionProviderArgs)
    {
        super(data);
        if (typeof this.optionalThumbDimensions === 'undefined') this.optionalThumbDimensions = [];
		if (typeof this.requiredThumbDimensions === 'undefined') this.requiredThumbDimensions = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaGenericDistributionProvider' },
				id : { type : 'n', readOnly : true },
				createdAt : { type : 'd', readOnly : true },
				updatedAt : { type : 'd', readOnly : true },
				partnerId : { type : 'n', readOnly : true },
				isDefault : { type : 'b' },
				status : { type : 'en', readOnly : true, subTypeConstructor : KalturaGenericDistributionProviderStatus, subType : 'KalturaGenericDistributionProviderStatus' },
				optionalFlavorParamsIds : { type : 's' },
				requiredFlavorParamsIds : { type : 's' },
				optionalThumbDimensions : { type : 'a', subTypeConstructor : KalturaDistributionThumbDimensions, subType : 'KalturaDistributionThumbDimensions' },
				requiredThumbDimensions : { type : 'a', subTypeConstructor : KalturaDistributionThumbDimensions, subType : 'KalturaDistributionThumbDimensions' },
				editableFields : { type : 's' },
				mandatoryFields : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaGenericDistributionProvider',KalturaGenericDistributionProvider);
