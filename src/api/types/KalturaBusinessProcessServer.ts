
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBusinessProcessServerStatus } from './KalturaBusinessProcessServerStatus';
import { KalturaBusinessProcessProvider } from './KalturaBusinessProcessProvider';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBusinessProcessServerArgs  extends KalturaObjectBaseArgs {
    name? : string;
	systemName? : string;
	description? : string;
	dc? : number;
}


export class KalturaBusinessProcessServer extends KalturaObjectBase {

    readonly id : number;
	readonly createdAt : Date;
	readonly updatedAt : Date;
	readonly partnerId : number;
	name : string;
	systemName : string;
	description : string;
	readonly status : KalturaBusinessProcessServerStatus;
	readonly type : KalturaBusinessProcessProvider;
	dc : number;

    constructor(data? : KalturaBusinessProcessServerArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBusinessProcessServer' },
				id : { type : 'n', readOnly : true },
				createdAt : { type : 'd', readOnly : true },
				updatedAt : { type : 'd', readOnly : true },
				partnerId : { type : 'n', readOnly : true },
				name : { type : 's' },
				systemName : { type : 's' },
				description : { type : 's' },
				status : { type : 'es', readOnly : true, subTypeConstructor : KalturaBusinessProcessServerStatus, subType : 'KalturaBusinessProcessServerStatus' },
				type : { type : 'es', readOnly : true, subTypeConstructor : KalturaBusinessProcessProvider, subType : 'KalturaBusinessProcessProvider' },
				dc : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBusinessProcessServer',KalturaBusinessProcessServer);
