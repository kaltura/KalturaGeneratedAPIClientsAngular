
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaESearchOrderBy } from './KalturaESearchOrderBy';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaESearchParamsArgs  extends KalturaObjectBaseArgs {
    objectStatuses? : string;
	objectId? : string;
	orderBy? : KalturaESearchOrderBy;
	useHighlight? : boolean;
}


export class KalturaESearchParams extends KalturaObjectBase {

    objectStatuses : string;
	objectId : string;
	orderBy : KalturaESearchOrderBy;
	useHighlight : boolean;

    constructor(data? : KalturaESearchParamsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchParams' },
				objectStatuses : { type : 's' },
				objectId : { type : 's' },
				orderBy : { type : 'o', subTypeConstructor : KalturaESearchOrderBy, subType : 'KalturaESearchOrderBy' },
				useHighlight : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaESearchParams',KalturaESearchParams);
