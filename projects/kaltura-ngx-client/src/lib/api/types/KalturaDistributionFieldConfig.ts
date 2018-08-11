
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionFieldRequiredStatus } from './KalturaDistributionFieldRequiredStatus';
import { KalturaString } from './KalturaString';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaDistributionFieldConfigArgs  extends KalturaObjectBaseArgs {
    fieldName? : string;
	userFriendlyFieldName? : string;
	entryMrssXslt? : string;
	isRequired? : KalturaDistributionFieldRequiredStatus;
	type? : string;
	updateOnChange? : boolean;
	updateParams? : KalturaString[];
	triggerDeleteOnError? : boolean;
}


export class KalturaDistributionFieldConfig extends KalturaObjectBase {

    fieldName : string;
	userFriendlyFieldName : string;
	entryMrssXslt : string;
	isRequired : KalturaDistributionFieldRequiredStatus;
	type : string;
	updateOnChange : boolean;
	updateParams : KalturaString[];
	readonly isDefault : boolean;
	triggerDeleteOnError : boolean;

    constructor(data? : KalturaDistributionFieldConfigArgs)
    {
        super(data);
        if (typeof this.updateParams === 'undefined') this.updateParams = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDistributionFieldConfig' },
				fieldName : { type : 's' },
				userFriendlyFieldName : { type : 's' },
				entryMrssXslt : { type : 's' },
				isRequired : { type : 'en', subTypeConstructor : KalturaDistributionFieldRequiredStatus, subType : 'KalturaDistributionFieldRequiredStatus' },
				type : { type : 's' },
				updateOnChange : { type : 'b' },
				updateParams : { type : 'a', subTypeConstructor : KalturaString, subType : 'KalturaString' },
				isDefault : { type : 'b', readOnly : true },
				triggerDeleteOnError : { type : 'b' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDistributionFieldConfig'] = KalturaDistributionFieldConfig;