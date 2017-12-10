
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBusinessProcessServerStatus } from './KalturaBusinessProcessServerStatus';
import { KalturaBusinessProcessProvider } from './KalturaBusinessProcessProvider';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaBusinessProcessServerBaseFilterArgs  extends KalturaFilterArgs {
    idEqual? : number;
	idIn? : string;
	idNotIn? : string;
	createdAtGreaterThanOrEqual? : Date;
	createdAtLessThanOrEqual? : Date;
	updatedAtGreaterThanOrEqual? : Date;
	updatedAtLessThanOrEqual? : Date;
	partnerIdEqual? : number;
	partnerIdIn? : string;
	statusEqual? : KalturaBusinessProcessServerStatus;
	statusNotEqual? : KalturaBusinessProcessServerStatus;
	statusIn? : string;
	statusNotIn? : string;
	typeEqual? : KalturaBusinessProcessProvider;
	typeIn? : string;
	dcEqual? : number;
	dcEqOrNull? : number;
}


export class KalturaBusinessProcessServerBaseFilter extends KalturaFilter {

    idEqual : number;
	idIn : string;
	idNotIn : string;
	createdAtGreaterThanOrEqual : Date;
	createdAtLessThanOrEqual : Date;
	updatedAtGreaterThanOrEqual : Date;
	updatedAtLessThanOrEqual : Date;
	partnerIdEqual : number;
	partnerIdIn : string;
	statusEqual : KalturaBusinessProcessServerStatus;
	statusNotEqual : KalturaBusinessProcessServerStatus;
	statusIn : string;
	statusNotIn : string;
	typeEqual : KalturaBusinessProcessProvider;
	typeIn : string;
	dcEqual : number;
	dcEqOrNull : number;

    constructor(data? : KalturaBusinessProcessServerBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBusinessProcessServerBaseFilter' },
				idEqual : { type : 'n' },
				idIn : { type : 's' },
				idNotIn : { type : 's' },
				createdAtGreaterThanOrEqual : { type : 'd' },
				createdAtLessThanOrEqual : { type : 'd' },
				updatedAtGreaterThanOrEqual : { type : 'd' },
				updatedAtLessThanOrEqual : { type : 'd' },
				partnerIdEqual : { type : 'n' },
				partnerIdIn : { type : 's' },
				statusEqual : { type : 'es', subTypeConstructor : KalturaBusinessProcessServerStatus, subType : 'KalturaBusinessProcessServerStatus' },
				statusNotEqual : { type : 'es', subTypeConstructor : KalturaBusinessProcessServerStatus, subType : 'KalturaBusinessProcessServerStatus' },
				statusIn : { type : 's' },
				statusNotIn : { type : 's' },
				typeEqual : { type : 'es', subTypeConstructor : KalturaBusinessProcessProvider, subType : 'KalturaBusinessProcessProvider' },
				typeIn : { type : 's' },
				dcEqual : { type : 'n' },
				dcEqOrNull : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBusinessProcessServerBaseFilter',KalturaBusinessProcessServerBaseFilter);
