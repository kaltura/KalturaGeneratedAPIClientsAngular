
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaBaseRestriction } from './KalturaBaseRestriction';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaAccessControlArgs  extends KalturaObjectBaseArgs {
    name? : string;
	systemName? : string;
	description? : string;
	isDefault? : KalturaNullableBoolean;
	restrictions? : KalturaBaseRestriction[];
}


export class KalturaAccessControl extends KalturaObjectBase {

    readonly id : number;
	readonly partnerId : number;
	name : string;
	systemName : string;
	description : string;
	readonly createdAt : Date;
	isDefault : KalturaNullableBoolean;
	restrictions : KalturaBaseRestriction[];
	readonly containsUnsuportedRestrictions : boolean;

    constructor(data? : KalturaAccessControlArgs)
    {
        super(data);
        if (typeof this.restrictions === 'undefined') this.restrictions = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAccessControl' },
				id : { type : 'n', readOnly : true },
				partnerId : { type : 'n', readOnly : true },
				name : { type : 's' },
				systemName : { type : 's' },
				description : { type : 's' },
				createdAt : { type : 'd', readOnly : true },
				isDefault : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				restrictions : { type : 'a', subTypeConstructor : KalturaBaseRestriction, subType : 'KalturaBaseRestriction' },
				containsUnsuportedRestrictions : { type : 'b', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAccessControl',KalturaAccessControl);
