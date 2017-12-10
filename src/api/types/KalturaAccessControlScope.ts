
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAccessControlContextTypeHolder } from './KalturaAccessControlContextTypeHolder';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaAccessControlScopeArgs  extends KalturaObjectBaseArgs {
    referrer? : string;
	ip? : string;
	ks? : string;
	userAgent? : string;
	time? : number;
	contexts? : KalturaAccessControlContextTypeHolder[];
	hashes? : KalturaKeyValue[];
}


export class KalturaAccessControlScope extends KalturaObjectBase {

    referrer : string;
	ip : string;
	ks : string;
	userAgent : string;
	time : number;
	contexts : KalturaAccessControlContextTypeHolder[];
	hashes : KalturaKeyValue[];

    constructor(data? : KalturaAccessControlScopeArgs)
    {
        super(data);
        if (typeof this.contexts === 'undefined') this.contexts = [];
		if (typeof this.hashes === 'undefined') this.hashes = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAccessControlScope' },
				referrer : { type : 's' },
				ip : { type : 's' },
				ks : { type : 's' },
				userAgent : { type : 's' },
				time : { type : 'n' },
				contexts : { type : 'a', subTypeConstructor : KalturaAccessControlContextTypeHolder, subType : 'KalturaAccessControlContextTypeHolder' },
				hashes : { type : 'a', subTypeConstructor : KalturaKeyValue, subType : 'KalturaKeyValue' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAccessControlScope',KalturaAccessControlScope);
