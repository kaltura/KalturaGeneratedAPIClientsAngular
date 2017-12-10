
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAuditTrailStatus } from './KalturaAuditTrailStatus';
import { KalturaAuditTrailObjectType } from './KalturaAuditTrailObjectType';
import { KalturaAuditTrailAction } from './KalturaAuditTrailAction';
import { KalturaAuditTrailInfo } from './KalturaAuditTrailInfo';
import { KalturaAuditTrailContext } from './KalturaAuditTrailContext';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaAuditTrailArgs  extends KalturaObjectBaseArgs {
    auditObjectType? : KalturaAuditTrailObjectType;
	objectId? : string;
	relatedObjectId? : string;
	relatedObjectType? : KalturaAuditTrailObjectType;
	entryId? : string;
	userId? : string;
	action? : KalturaAuditTrailAction;
	data? : KalturaAuditTrailInfo;
	clientTag? : string;
	description? : string;
}


export class KalturaAuditTrail extends KalturaObjectBase {

    readonly id : number;
	readonly createdAt : Date;
	readonly parsedAt : number;
	readonly status : KalturaAuditTrailStatus;
	auditObjectType : KalturaAuditTrailObjectType;
	objectId : string;
	relatedObjectId : string;
	relatedObjectType : KalturaAuditTrailObjectType;
	entryId : string;
	readonly masterPartnerId : number;
	readonly partnerId : number;
	readonly requestId : string;
	userId : string;
	action : KalturaAuditTrailAction;
	data : KalturaAuditTrailInfo;
	readonly ks : string;
	readonly context : KalturaAuditTrailContext;
	readonly entryPoint : string;
	readonly serverName : string;
	readonly ipAddress : string;
	readonly userAgent : string;
	clientTag : string;
	description : string;
	readonly errorDescription : string;

    constructor(data? : KalturaAuditTrailArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAuditTrail' },
				id : { type : 'n', readOnly : true },
				createdAt : { type : 'd', readOnly : true },
				parsedAt : { type : 'n', readOnly : true },
				status : { type : 'en', readOnly : true, subTypeConstructor : KalturaAuditTrailStatus, subType : 'KalturaAuditTrailStatus' },
				auditObjectType : { type : 'es', subTypeConstructor : KalturaAuditTrailObjectType, subType : 'KalturaAuditTrailObjectType' },
				objectId : { type : 's' },
				relatedObjectId : { type : 's' },
				relatedObjectType : { type : 'es', subTypeConstructor : KalturaAuditTrailObjectType, subType : 'KalturaAuditTrailObjectType' },
				entryId : { type : 's' },
				masterPartnerId : { type : 'n', readOnly : true },
				partnerId : { type : 'n', readOnly : true },
				requestId : { type : 's', readOnly : true },
				userId : { type : 's' },
				action : { type : 'es', subTypeConstructor : KalturaAuditTrailAction, subType : 'KalturaAuditTrailAction' },
				data : { type : 'o', subTypeConstructor : KalturaAuditTrailInfo, subType : 'KalturaAuditTrailInfo' },
				ks : { type : 's', readOnly : true },
				context : { type : 'en', readOnly : true, subTypeConstructor : KalturaAuditTrailContext, subType : 'KalturaAuditTrailContext' },
				entryPoint : { type : 's', readOnly : true },
				serverName : { type : 's', readOnly : true },
				ipAddress : { type : 's', readOnly : true },
				userAgent : { type : 's', readOnly : true },
				clientTag : { type : 's' },
				description : { type : 's' },
				errorDescription : { type : 's', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAuditTrail',KalturaAuditTrail);
