
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAuditTrailStatus } from './KalturaAuditTrailStatus';
import { KalturaAuditTrailObjectType } from './KalturaAuditTrailObjectType';
import { KalturaAuditTrailAction } from './KalturaAuditTrailAction';
import { KalturaAuditTrailContext } from './KalturaAuditTrailContext';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';

export interface KalturaAuditTrailBaseFilterArgs  extends KalturaRelatedFilterArgs {
    idEqual? : number;
	createdAtGreaterThanOrEqual? : Date;
	createdAtLessThanOrEqual? : Date;
	parsedAtGreaterThanOrEqual? : number;
	parsedAtLessThanOrEqual? : number;
	statusEqual? : KalturaAuditTrailStatus;
	statusIn? : string;
	auditObjectTypeEqual? : KalturaAuditTrailObjectType;
	auditObjectTypeIn? : string;
	objectIdEqual? : string;
	objectIdIn? : string;
	relatedObjectIdEqual? : string;
	relatedObjectIdIn? : string;
	relatedObjectTypeEqual? : KalturaAuditTrailObjectType;
	relatedObjectTypeIn? : string;
	entryIdEqual? : string;
	entryIdIn? : string;
	masterPartnerIdEqual? : number;
	masterPartnerIdIn? : string;
	partnerIdEqual? : number;
	partnerIdIn? : string;
	requestIdEqual? : string;
	requestIdIn? : string;
	userIdEqual? : string;
	userIdIn? : string;
	actionEqual? : KalturaAuditTrailAction;
	actionIn? : string;
	ksEqual? : string;
	contextEqual? : KalturaAuditTrailContext;
	contextIn? : string;
	entryPointEqual? : string;
	entryPointIn? : string;
	serverNameEqual? : string;
	serverNameIn? : string;
	ipAddressEqual? : string;
	ipAddressIn? : string;
	clientTagEqual? : string;
}


export class KalturaAuditTrailBaseFilter extends KalturaRelatedFilter {

    idEqual : number;
	createdAtGreaterThanOrEqual : Date;
	createdAtLessThanOrEqual : Date;
	parsedAtGreaterThanOrEqual : number;
	parsedAtLessThanOrEqual : number;
	statusEqual : KalturaAuditTrailStatus;
	statusIn : string;
	auditObjectTypeEqual : KalturaAuditTrailObjectType;
	auditObjectTypeIn : string;
	objectIdEqual : string;
	objectIdIn : string;
	relatedObjectIdEqual : string;
	relatedObjectIdIn : string;
	relatedObjectTypeEqual : KalturaAuditTrailObjectType;
	relatedObjectTypeIn : string;
	entryIdEqual : string;
	entryIdIn : string;
	masterPartnerIdEqual : number;
	masterPartnerIdIn : string;
	partnerIdEqual : number;
	partnerIdIn : string;
	requestIdEqual : string;
	requestIdIn : string;
	userIdEqual : string;
	userIdIn : string;
	actionEqual : KalturaAuditTrailAction;
	actionIn : string;
	ksEqual : string;
	contextEqual : KalturaAuditTrailContext;
	contextIn : string;
	entryPointEqual : string;
	entryPointIn : string;
	serverNameEqual : string;
	serverNameIn : string;
	ipAddressEqual : string;
	ipAddressIn : string;
	clientTagEqual : string;

    constructor(data? : KalturaAuditTrailBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAuditTrailBaseFilter' },
				idEqual : { type : 'n' },
				createdAtGreaterThanOrEqual : { type : 'd' },
				createdAtLessThanOrEqual : { type : 'd' },
				parsedAtGreaterThanOrEqual : { type : 'n' },
				parsedAtLessThanOrEqual : { type : 'n' },
				statusEqual : { type : 'en', subTypeConstructor : KalturaAuditTrailStatus, subType : 'KalturaAuditTrailStatus' },
				statusIn : { type : 's' },
				auditObjectTypeEqual : { type : 'es', subTypeConstructor : KalturaAuditTrailObjectType, subType : 'KalturaAuditTrailObjectType' },
				auditObjectTypeIn : { type : 's' },
				objectIdEqual : { type : 's' },
				objectIdIn : { type : 's' },
				relatedObjectIdEqual : { type : 's' },
				relatedObjectIdIn : { type : 's' },
				relatedObjectTypeEqual : { type : 'es', subTypeConstructor : KalturaAuditTrailObjectType, subType : 'KalturaAuditTrailObjectType' },
				relatedObjectTypeIn : { type : 's' },
				entryIdEqual : { type : 's' },
				entryIdIn : { type : 's' },
				masterPartnerIdEqual : { type : 'n' },
				masterPartnerIdIn : { type : 's' },
				partnerIdEqual : { type : 'n' },
				partnerIdIn : { type : 's' },
				requestIdEqual : { type : 's' },
				requestIdIn : { type : 's' },
				userIdEqual : { type : 's' },
				userIdIn : { type : 's' },
				actionEqual : { type : 'es', subTypeConstructor : KalturaAuditTrailAction, subType : 'KalturaAuditTrailAction' },
				actionIn : { type : 's' },
				ksEqual : { type : 's' },
				contextEqual : { type : 'en', subTypeConstructor : KalturaAuditTrailContext, subType : 'KalturaAuditTrailContext' },
				contextIn : { type : 's' },
				entryPointEqual : { type : 's' },
				entryPointIn : { type : 's' },
				serverNameEqual : { type : 's' },
				serverNameIn : { type : 's' },
				ipAddressEqual : { type : 's' },
				ipAddressIn : { type : 's' },
				clientTagEqual : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAuditTrailBaseFilter',KalturaAuditTrailBaseFilter);
