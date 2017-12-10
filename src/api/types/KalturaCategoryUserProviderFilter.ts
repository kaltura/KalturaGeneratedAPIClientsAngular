
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCategoryUserStatus } from './KalturaCategoryUserStatus';
import { KalturaUpdateMethodType } from './KalturaUpdateMethodType';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaCategoryUserProviderFilterArgs  extends KalturaFilterArgs {
    userIdEqual? : string;
	userIdIn? : string;
	statusEqual? : KalturaCategoryUserStatus;
	statusIn? : string;
	createdAtGreaterThanOrEqual? : number;
	createdAtLessThanOrEqual? : number;
	updatedAtGreaterThanOrEqual? : number;
	updatedAtLessThanOrEqual? : number;
	updateMethodEqual? : KalturaUpdateMethodType;
	updateMethodIn? : string;
	permissionNamesMatchAnd? : string;
	permissionNamesMatchOr? : string;
}


export class KalturaCategoryUserProviderFilter extends KalturaFilter {

    userIdEqual : string;
	userIdIn : string;
	statusEqual : KalturaCategoryUserStatus;
	statusIn : string;
	createdAtGreaterThanOrEqual : number;
	createdAtLessThanOrEqual : number;
	updatedAtGreaterThanOrEqual : number;
	updatedAtLessThanOrEqual : number;
	updateMethodEqual : KalturaUpdateMethodType;
	updateMethodIn : string;
	permissionNamesMatchAnd : string;
	permissionNamesMatchOr : string;

    constructor(data? : KalturaCategoryUserProviderFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCategoryUserProviderFilter' },
				userIdEqual : { type : 's' },
				userIdIn : { type : 's' },
				statusEqual : { type : 'en', subTypeConstructor : KalturaCategoryUserStatus, subType : 'KalturaCategoryUserStatus' },
				statusIn : { type : 's' },
				createdAtGreaterThanOrEqual : { type : 'n' },
				createdAtLessThanOrEqual : { type : 'n' },
				updatedAtGreaterThanOrEqual : { type : 'n' },
				updatedAtLessThanOrEqual : { type : 'n' },
				updateMethodEqual : { type : 'en', subTypeConstructor : KalturaUpdateMethodType, subType : 'KalturaUpdateMethodType' },
				updateMethodIn : { type : 's' },
				permissionNamesMatchAnd : { type : 's' },
				permissionNamesMatchOr : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCategoryUserProviderFilter',KalturaCategoryUserProviderFilter);
