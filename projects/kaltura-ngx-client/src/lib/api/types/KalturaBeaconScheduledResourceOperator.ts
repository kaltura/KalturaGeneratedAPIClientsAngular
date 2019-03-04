
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchOperatorType } from './KalturaESearchOperatorType';
import { KalturaBeaconScheduledResourceBaseItem, KalturaBeaconScheduledResourceBaseItemArgs } from './KalturaBeaconScheduledResourceBaseItem';

export interface KalturaBeaconScheduledResourceOperatorArgs  extends KalturaBeaconScheduledResourceBaseItemArgs {
    operator? : KalturaESearchOperatorType;
	searchItems? : KalturaBeaconScheduledResourceBaseItem[];
}


export class KalturaBeaconScheduledResourceOperator extends KalturaBeaconScheduledResourceBaseItem {

    operator : KalturaESearchOperatorType;
	searchItems : KalturaBeaconScheduledResourceBaseItem[];

    constructor(data? : KalturaBeaconScheduledResourceOperatorArgs)
    {
        super(data);
        if (typeof this.searchItems === 'undefined') this.searchItems = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBeaconScheduledResourceOperator' },
				operator : { type : 'en', subTypeConstructor : KalturaESearchOperatorType, subType : 'KalturaESearchOperatorType' },
				searchItems : { type : 'a', subTypeConstructor : KalturaBeaconScheduledResourceBaseItem, subType : 'KalturaBeaconScheduledResourceBaseItem' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBeaconScheduledResourceOperator'] = KalturaBeaconScheduledResourceOperator;